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
//
//import data.ProfileDAO;
//import entities.Profile;
@RestController
@RequestMapping("profile")
public class ProfileController {
    
//    @Autowired
//    private ProfileDAO ProfileDAO;
//
//    @RequestMapping(value = "ping", method=RequestMethod.GET)
//    public String ping(){
//    	return "pong";
//    }
//    
//    @RequestMapping(path="", method=RequestMethod.GET)
//    public List<Category> index(HttpServletRequest req, HttpServletResponse res) {
//            
//        return CategoryDAO.index();
    }