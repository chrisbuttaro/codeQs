package controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import data.WrongListDAO;
import entities.ExamQuestion;

@RestController
public class WrongListController {
	
	@Autowired
	private WrongListDAO wrongListDAO;
	
	@RequestMapping(value="user/{uid}/wrongList")
	public List<ExamQuestion> getUserWrongList(HttpServletRequest req, HttpServletResponse res, @PathVariable int uid) {
		return wrongListDAO.getWrongListByUser(uid);
	}
}
