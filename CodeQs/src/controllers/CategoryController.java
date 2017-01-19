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

import data.CategoryDAO;
import entities.Category;

@RestController
@RequestMapping("category")
public class CategoryController {

	@Autowired
	private CategoryDAO CategoryDAO;

	@RequestMapping(value = "ping", method = RequestMethod.GET)
	public String ping() {
		return "pong";
	}

	@RequestMapping(path = "", method = RequestMethod.GET)
	public List<Category> index(HttpServletRequest req, HttpServletResponse res) {

		return CategoryDAO.index();
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.PUT)
	public Category update(@PathVariable int id, @RequestBody Category categoryJson) {
		System.out.println("in controller " + categoryJson);
		return CategoryDAO.update(id, categoryJson);
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.GET)
	public Category show(HttpServletRequest req, HttpServletResponse res, @PathVariable int id) {
		return CategoryDAO.show(id);
	}

	@RequestMapping(path = "", method = RequestMethod.POST)
	public Category create(@RequestBody Category newCategory) {

		return CategoryDAO.create(newCategory);

	}

	@RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
	public Category destroy(HttpServletRequest req, HttpServletResponse res, @PathVariable int id) {
		return CategoryDAO.destroy(id);
	}

}