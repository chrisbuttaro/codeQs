package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import entities.Question;

@Transactional
@Repository
public class QuestionDAO {
	@PersistenceContext
	private EntityManager em;
	
	public List<Question> index() {
		String query = "select q from Question q";
		return em.createQuery(query, Question.class).getResultList();
	}
	
//	public Question show(int id) {
//		System.out.println("in DAO");
//		System.out.println(em.find(Question.class, id));
//		
//		return em.find(Question.class, id);
//	}
//
//	public Question create(Question newQuestion) {
//
//		em.persist(newQuestion);
//		em.flush();
//		
//		return newQuestion;
//	}
//
//	public Question update(int id, Question q) {
//		Question Question = em.find(Question.class, id);
////		System.out.println(em.find(Question.class, id));
////		Question.setTask(q.getTask());
////		Question.setCompleted(q.getCompleted());
////		Question.setDescription(q.getDescription());
//		em.persist(Question);
//		em.flush();
//		return Question;
//	}
//
//	public Question destroy(int id) {	
//		Question Question = em.find(Question.class, id);
//		em.remove(Question);
//		return Question;
//	}
}
