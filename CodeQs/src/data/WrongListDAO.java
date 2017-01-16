package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import entities.ExamQuestion;
import entities.Question;

@Repository
@Transactional
public class WrongListDAO {
	@PersistenceContext
	private EntityManager em;
	
	public List<Question> getWrongListByUser(int uid, int cid) {
		String query = "SELECT eq.question FROM ExamQuestion eq where eq.exam.user.id =" + uid + " AND eq.question.category.id = " + cid + " AND eq.isRight = false";
		List<ExamQuestion> wrongList = em.createQuery(query, ExamQuestion.class).getResultList();
		List<Question> wrongListQuestion = null;
		for (ExamQuestion examQuestion : wrongList) {
			wrongListQuestion.add(examQuestion.getQuestion());
		}
		System.out.println(wrongListQuestion);
		return wrongListQuestion;
	}

}
