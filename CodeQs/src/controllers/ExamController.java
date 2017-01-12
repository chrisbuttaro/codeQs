package controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import data.ExamDAO;
import entities.Exam;
@RestController
public class ExamController {
	
	@Autowired
	private ExamDAO ExamDAO;

	@RequestMapping(path="exams", method=RequestMethod.GET)
	public List<Exam> index(HttpServletRequest req, HttpServletResponse res) {
			
		return ExamDAO.index();
	}
	
	@RequestMapping(path="exams/{id}", method=RequestMethod.PUT)
	public Exam update(@PathVariable int id, @RequestBody Exam ExamJson){
		System.out.println("in controller "+ExamJson);
	return ExamDAO.update(id, ExamJson); 
}

	@RequestMapping(path="exams/{id}", method=RequestMethod.GET)
	public Exam show(HttpServletRequest req, HttpServletResponse res, @PathVariable int id) {
		return ExamDAO.show(id);
	}

	
	@RequestMapping(path="exams", method=RequestMethod.POST)
	public Exam create(@RequestBody Exam ExamJson) {
		
		return ExamDAO.create(ExamJson);
		
	}

	
	@RequestMapping(path="exams/{id}", method=RequestMethod.DELETE)
	public Exam destroy(HttpServletRequest req, HttpServletResponse res, @PathVariable int id) {
		return ExamDAO.destroy(id);
	}

}
