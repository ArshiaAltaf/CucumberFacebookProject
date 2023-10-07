package org.utilities;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReport {
	
	public static void generateJVMReports(String jsonPath) {
		
		//1.Mention the desired location of your cucumber report
		File f = new File(System.getProperty("user.dir")+"\\target\\Reports\\Cucumber");
		
		//2. Mention the details to the report
		Configuration con = new Configuration(f, "Facebook Project");
		con.addClassifications("Browser name", "Edge");
		con.addClassifications("Browser version", "116");
		con.addClassifications("OS", "Windows");
		con.addClassifications("Sprint", "101");
		con.addClassifications("Time Zone", "IST");
		
		//3. Add json file paths into List<String>
		List<String> li = new ArrayList<String>();
		li.add(jsonPath);
		
		//4. Create object for Report builder
		ReportBuilder r = new ReportBuilder(li, con);
		r.generateReports();


		

	}
	

}
