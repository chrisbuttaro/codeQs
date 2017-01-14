package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import entities.Exam;
import entities.ExamQuestion;
import entities.Question;
@Transactional
@Repository
public class ExamQuestionDAO {
	@PersistenceContext 
	private EntityManager em;
	
	public List index() {
		String query = "Select eq from ExamQuestion eq";
		return em.createQuery(query, ExamQuestion.class).getResultList();
	}
	
	public ExamQuestion create(ExamQuestion EQ, int eid, int qid) {
		Exam e=em.find(Exam.class, eid);
		Question q=em.find(Question.class, qid);
		System.out.print("ExamQuestion: "+EQ);
		System.out.print("Exam ID: "+eid);
		System.out.print("Question ID: "+qid);
		
		EQ.setExam(e);
		EQ.setQuestion(q);
		em.persist(EQ);
		em.flush();
		return EQ;
	}

	
	
}
