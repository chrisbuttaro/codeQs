package controllers;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import data.ExamQuestionDAO;
import entities.Exam;
import entities.ExamQuestion;
@RestController
public class ExamQuestionController {
	@Autowired
	private ExamQuestionDAO ExamQuestionDAO;
	
	@RequestMapping(path="ExamQuestions", method=RequestMethod.GET)
	public List<Exam> index(HttpServletRequest req, HttpServletResponse res) {
			
		return ExamQuestionDAO.index();
	}
	
	@RequestMapping(path="Exam/{id}/Question/{qid}/ExamQuestions", method=RequestMethod.POST)
	public ExamQuestion create(@RequestBody ExamQuestion EQ, @PathVariable("id")int id, @PathVariable("qid")int qid) {
		return ExamQuestionDAO.create(EQ, id, qid);
		
		
		
		
	}

}
