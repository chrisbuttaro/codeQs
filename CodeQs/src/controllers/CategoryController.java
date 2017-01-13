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
public class CategoryController {
    
    @Autowired
    private CategoryDAO CategoryDAO;

    @RequestMapping(path="codeqs", method=RequestMethod.GET)
    public List<Category> index(HttpServletRequest req, HttpServletResponse res) {
            
        return CategoryDAO.index();
    }
    
    @RequestMapping(path="codeqs/{id}", method=RequestMethod.PUT)
    public Category update(@PathVariable int id, @RequestBody Category categoryJson){
        System.out.println("in controller "+categoryJson);
    return CategoryDAO.update(id, categoryJson);
}

    @RequestMapping(path="codeqs/{id}", method=RequestMethod.GET)
    public Category show(HttpServletRequest req, HttpServletResponse res, @PathVariable int id) {
        return CategoryDAO.show(id);
    }

    

    
    @RequestMapping(path="codeqs", method=RequestMethod.POST)
    public Category create(@RequestBody Category categoryJson) {
        
        return CategoryDAO.create(categoryJson);
        
    }

    
    @RequestMapping(path="codeqs/{id}", method=RequestMethod.DELETE)
    public Category destroy(HttpServletRequest req, HttpServletResponse res, @PathVariable int id) {
        return CategoryDAO.destroy(id);
    }

}