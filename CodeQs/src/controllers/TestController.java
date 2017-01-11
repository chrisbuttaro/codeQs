package controllers;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import data.TestDAO;
import entities.Test;
import entities.User;
@RestController
@Transactional
public class TestController {
	
	@Autowired
	private TestDAO testDAO;

	  @RequestMapping(value = "/createTest", method = RequestMethod.POST)
	  public Test create(HttpServletRequest req, HttpServletResponse res, @RequestBody String testJsonString) {
			
		    ObjectMapper mapper = new ObjectMapper();
		    Test test = null;
		    // Parse user from JSON
		    try {
		      test = mapper.readValue(testJsonString, Test.class);
		      test = testDAO.create(test);
		    } catch (Exception e) {
		      e.printStackTrace();
		      res.setStatus(422);
		    }
		    return test;
	    }
}
