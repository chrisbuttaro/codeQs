package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

import entities.Exam;
import entities.ExamQuestion;
import entities.Question;
@Transactional
public class TestDAO {
	@PersistenceContext//includes jpa's entity manager
    private EntityManager em;
	
	public List createExamQs() {
			List<String> questions=em.createQuery("SELECT q.question FROM Question q")
					.setMaxResults(10).getResultList();
			return questions;
		}
			
	   
	  }
