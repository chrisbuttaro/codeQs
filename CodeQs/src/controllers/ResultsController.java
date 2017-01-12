package controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("results")

public class ResultsController {

//	@Autowired
//	private TodoDAOI todoDAO;
	
	@RequestMapping(value="ping", method = RequestMethod.GET)
	public String ping() {
		return "pong";
	}
}
