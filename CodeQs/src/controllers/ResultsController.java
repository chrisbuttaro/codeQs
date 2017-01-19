package controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import data.ResultsDAO;
import entities.ExamQuestion;

@RestController

public class ResultsController {

	@Autowired
	private ResultsDAO resultsDAO;

	@RequestMapping(value = "ping", method = RequestMethod.GET)
	public String ping() {
		return "pong";
	}

	@RequestMapping(value = "exams/{eid}/results", method = RequestMethod.GET)
	public List<ExamQuestion> getResultsByExam(HttpServletRequest req, HttpServletResponse res, @PathVariable int eid) {
		return resultsDAO.getResultsByTest(eid);
	}
}
