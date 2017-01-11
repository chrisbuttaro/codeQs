package data;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

import entities.Question;
import entities.Test;
import entities.TestQuestion;
@Transactional
public class TestDAO {
	@PersistenceContext//includes jpa's entity manager
    private EntityManager em;
	
	public Test create(Test test) {
		for(int i=1; i<11; i++){
			Question q=em.createQuery("SELECT q FROM Question q where q.id ="+i, Question.class).getSingleResult();
			TestQuestion tq=new TestQuestion(test.getId(), q.getId(), false); 
			em.persist(tq);
			em.flush(); 
		}
	    em.persist(test);
	    em.flush();
	    return test;
	  }

}
