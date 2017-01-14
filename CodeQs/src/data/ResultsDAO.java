package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import entities.ExamQuestion;

@Repository
@Transactional
public class ResultsDAO {
	@PersistenceContext
	private EntityManager em;
	
	public List<ExamQuestion> getResultsByTest(int examId) {
		String query = "SELECT eq FROM ExamQuestion eq where eq.exam.id =" + examId;
		List<ExamQuestion> examQuestions = em.createQuery(query, ExamQuestion.class).getResultList();
		System.out.println(examQuestions);
		return examQuestions;
	}
}
