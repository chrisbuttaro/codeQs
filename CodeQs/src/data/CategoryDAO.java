package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import entities.Category;
@Transactional
@Repository
public class CategoryDAO {
	@PersistenceContext//includes jpa's entity manager
    private EntityManager em;
	
	
	public List<Category> index(){
		String query ="SELECT c FROM Category c";
		return em.createQuery(query, Category.class).getResultList();
	}


	public Category update(int id, Category categoryJson) {
		Category category = em.find(Category.class, id);
	category.setName(categoryJson.getName());
	category.setQuestions(categoryJson.getQuestions());
	em.persist(category);
	em.flush();
	return category;
	}


	public Category show(int id) {
		return em.find(Category.class, id);
	}


	public Category create(Category newCategory) {
		em.persist(newCategory);
		em.flush();
		
		return newCategory;
	}


	public Category destroy(int id) {
		Category category = em.find(Category.class, id);
		em.remove(category);
		return category;
	}
}