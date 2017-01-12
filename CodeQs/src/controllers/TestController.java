package controllers;
import java.util.List;

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
import entities.Exam;
import entities.Question;
@RestController
@Transactional
public class TestController {
	
	@Autowired
	private TestDAO testDAO;

	  @RequestMapping(value = "/Questions", method = RequestMethod.GET)
	  public List createQlist(HttpServletRequest req, HttpServletResponse res) {
		 return testDAO.createExamQs();
	    }
}