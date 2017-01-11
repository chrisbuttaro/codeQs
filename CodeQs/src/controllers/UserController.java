package controllers;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import data.UserDAO;
import entities.User;
import security.JsonWebTokenGenerator;
@RestController
@Transactional
public class UserController {
	
	@Autowired
	private UserDAO userDAO;

	@Autowired
	  JsonWebTokenGenerator jwtGen;


	 @RequestMapping(path = "/unauthorized")
	 public void unauth(HttpServletResponse res) {
		 System.out.println("Herererererere");
		 res.setStatus(403);
		 return;
	 }


	  @RequestMapping(value = "/login", method = RequestMethod.POST)
	  public Map<String,String> login(HttpServletRequest req, HttpServletResponse res, @RequestBody String userJsonString) {
		
	    ObjectMapper mapper = new ObjectMapper();
	    User user = null;
	    // Parse user from JSON
	    try {
	      user = mapper.readValue(userJsonString, User.class);
	      System.out.println(userJsonString);
	    } catch (Exception e) {
	    	System.out.println("in first catch");
	      e.printStackTrace();
	      res.setStatus(422);
	    }
	    // Find managed user, return it if password is correct
	    try {
	      user = userDAO.authenticateuser(user);
	    } catch (Exception e) {
	      System.out.println("user not authenticated");
	      e.printStackTrace();
	      res.setStatus(401);
	      return null;
	    }

	    // Create encoded JWT for user
	    String jws = jwtGen.generateUserJwt(user);
	    Map<String, String> responseJson = new HashMap<>();
	    responseJson.put("jwt", jws);
	    return responseJson;
	  }
	  // Will produce 500 server errors for ALL issues, including:
	  // user not found
	  // Passwords not matching
	  // ... 500 is an inappropriate error for both of these as they are
	  // user caused issues (thus in the 400 range)

	
	  @RequestMapping(value = "/signup", method = RequestMethod.POST)
	  public Map<String,String> signup(HttpServletRequest req, HttpServletResponse res, @RequestBody String userJson) {
	    ObjectMapper mapper = new ObjectMapper();
	    User user = null;
	    try {
	      user = mapper.readValue(userJson, User.class);
	    } catch (IOException ie) {
	      ie.printStackTrace();
	    }
	    user = userDAO.create(user);
	    String jws = jwtGen.generateUserJwt(user);
	    Map<String,String> responseJson = new HashMap<>();
	    responseJson.put("jwt", jws);
	    return responseJson;
	  }}
