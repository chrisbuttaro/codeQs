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

import com.fasterxml.jackson.databind.ObjectMapper;

import data.QuestionDAO;
import entities.Question;

@RestController
@RequestMapping("question")
public class QuestionsController {
	
	@Autowired
	private QuestionDAO questionDAO;
	
	@RequestMapping(value="ping", method=RequestMethod.GET)
	public String ping(){
		return "pong"; 
	}
	
	@RequestMapping(path = "", method = RequestMethod.GET)
	public List<Question> index(HttpServletRequest req, HttpServletResponse res) {
		return questionDAO.index();
	}

	@RequestMapping(path = "{id}", method = RequestMethod.GET)
	public Question show(HttpServletRequest req, HttpServletResponse res, @PathVariable int id) {
		System.out.println("in controller");
		return questionDAO.show(id);
	}

	@RequestMapping(path = "", method = RequestMethod.POST)
	public Question create(HttpServletRequest req, HttpServletResponse res, @RequestBody Question t) {
		
		return questionDAO.create(t);
	}

	@RequestMapping(path = "{id}", method = RequestMethod.PUT)
	public Question update(HttpServletRequest req, HttpServletResponse res, @PathVariable int id, @RequestBody String json) {
		ObjectMapper om = new ObjectMapper();
		Question t = null;
		System.out.println("update");
		System.out.println(json);
		try {
			t = om.readValue(json, Question.class);
		}catch (Exception e) {
			System.out.println(e);
		}

		return questionDAO.update(id, t);
	}

	@RequestMapping(path = "{id}", method = RequestMethod.DELETE)
	public void destroy(HttpServletRequest req, HttpServletResponse res, @PathVariable int id) {

		questionDAO.destroy(id);
	}
	
}