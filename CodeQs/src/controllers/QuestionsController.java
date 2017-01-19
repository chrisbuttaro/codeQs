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

import data.QuestionDAO;
import entities.Answer;
import entities.Question;

@RestController
public class QuestionsController {

	@Autowired
	private QuestionDAO questionDAO;

	@RequestMapping(path = "question", method = RequestMethod.GET)
	public List<Question> index(HttpServletRequest req, HttpServletResponse res) {
		return questionDAO.index();
	}

	@RequestMapping(path = "user/{uid}/category/{cid}/question", method = RequestMethod.POST)
	public Question create(HttpServletRequest req, HttpServletResponse res, @RequestBody Question newQuestion,
			@PathVariable int cid, @PathVariable int uid) {

		return questionDAO.create(newQuestion, cid, uid);
	}

	@RequestMapping(path = "question/answer", method = RequestMethod.POST)
	public Answer createAnswer(HttpServletRequest req, HttpServletResponse res, @RequestBody Answer newAnswer,
			Question question, String answer, Boolean isCorrect) {

		return questionDAO.createAnswer(newAnswer, question, answer, isCorrect);
	}

	@RequestMapping(path = "category/{cid}/questions", method = RequestMethod.GET)
	public List<Question> getQuestionsByCategory(HttpServletRequest req, HttpServletResponse res,
			@PathVariable int cid) {
		return questionDAO.getQuestionsByCategory(cid);
	}

}