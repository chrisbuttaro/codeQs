package controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import data.UserProfileDAO;
import entities.Exam;
import entities.User;

@RestController
public class UserProfileController {
    
    @Autowired
    private UserProfileDAO userProfileDAO;

  
    @RequestMapping(value = "user/{uid}")
    	public User getUser(HttpServletRequest req, HttpServletResponse res, @PathVariable int uid){
    	
    	return userProfileDAO.getUser(uid);
    }
    
//    @RequestMapping(path="", method=RequestMethod.GET)
//    public List<Exam> index(HttpServletRequest req, HttpServletResponse res, @PathVariable int eid ) {
//            
//        return userProfileDAO.getUserProfileOfExamsTaken();
//    }
    
    @RequestMapping(path="user/{uid}/exam", method=RequestMethod.GET)
	public List<Exam> getAllUserExams(HttpServletRequest req, HttpServletResponse res, @PathVariable int uid) {
		return userProfileDAO.getAllUserExams(uid);
	}
    
 }
    