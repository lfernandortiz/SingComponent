package com.mint.test;

import java.io.BufferedInputStream;
import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.StringReader;
import java.security.InvalidParameterException;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.zefer.pd4ml.PD4ML;

/**
 * Servlet implementation class WebControllerConvertToPdf
 */
@WebServlet("/WebControllerConvertToPdf")
public class WebControllerConvertToPdf extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public WebControllerConvertToPdf() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		processRequest(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		processRequest(request, response);
	}
	
	private void processRequest(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String domString = request.getParameter("domparam");
		System.out.println("Dom"+domString);
		
		byte[] bytesPdf =getConversionHtmlToPdf(domString);
		
		FileOutputStream stream = new FileOutputStream("C:\\AppServ\\filespdf\\example.pdf");
		try {
		    stream.write(bytesPdf);
		} finally {
		    stream.close();
		}
		
		 response.setContentType("application/pdf");
	        response.setHeader("Cache-Control", "no-cache"); // HTTP 1.1
	        response.setHeader("Cache-Control", "max-age=0");
	        response.setHeader("Content-disposition",
	                "attachment; filename=fichero.pdf");
	        ServletOutputStream streamServlet = response.getOutputStream();
	        FileInputStream input = new FileInputStream(
	                "C:\\AppServ\\filespdf\\example.pdf");
	        BufferedInputStream buf = new BufferedInputStream(input);
	        int readBytes = 0;

	        while ((readBytes = buf.read()) != -1) {
	            streamServlet.write(readBytes);
	        }

	        stream.flush();
	        stream.close();
		
	}
	
	private byte[] getConversionHtmlToPdf(String html) {
		PD4ML pd4ml = new PD4ML();
		pd4ml.clearCache();
		pd4ml.enableDebugInfo();
		pd4ml.addStyle("body { margin:3px; }  #divContentForm { position:relative; }", true);
		pd4ml.addStyle(
				"div,table,textarea,input { color:rgb(0,0,0); font-family:Arial; font-style:normal; font-weight:normal; font-size:10px; }",
				true);
		pd4ml.addStyle(
				"input[type=\"radio\"],input[type=\"checkbox\"] { vertical-align:middle; margin:1px 3px 0 1px; }",
				true);
		pd4ml.addStyle("input[type=\"text\"],textarea { margin:0px; padding:0px; }", true);
		pd4ml.addStyle(
				"INPUT[disabled] { disabled: false; } INPUT[disabled=\"true\"] { disabled: false; } INPUT[disabled=\"disabled\"] { disabled: false; }",
				true);
		pd4ml.addStyle(
				"SELECT[disabled] { disabled: false; } SELECT[disabled=\"true\"] { disabled: false; } SELECT[disabled=\"disabled\"] { disabled: false; }",
				true);
		pd4ml.addStyle(
				"TEXTAREA[disabled] { disabled: false; } TEXTAREA[disabled=\"true\"] { disabled: false; } TEXTAREA[disabled=\"disabled\"] { disabled: false; }",
				true);
		pd4ml.addStyle("select, button { margin: 0; padding: 0; }", true);

		StringReader isr;
		ByteArrayOutputStream output = new ByteArrayOutputStream();

		isr = new StringReader(html);
		try {
			pd4ml.render(isr, output);
		} catch (InvalidParameterException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (output != null) {
				try {
					output.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}

		return output.toByteArray();
	}

}
