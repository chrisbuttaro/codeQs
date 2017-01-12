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
		// TODO Auto-generated method stub
		return null;
	}


	public Category show(int id) {
		// TODO Auto-generated method stub
		return null;
	}


	public Category create(Category categoryJson) {
		// TODO Auto-generated method stub
		return null;
	}


	public Category destroy(int id) {
		// TODO Auto-generated method stub
		return null;
	}
}