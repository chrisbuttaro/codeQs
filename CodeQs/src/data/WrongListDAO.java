package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import entities.ExamQuestion;

@Repository
@Transactional
public class WrongListDAO {
	@PersistenceContext
	private EntityManager em;
	
	public List<ExamQuestion> getWrongListByUser(int uid) {
		String query = "SELECT eq FROM ExamQuestion eq where eq.exam.user.id =" + uid + " AND eq.isRight = false";
		List<ExamQuestion> wrongList = em.createQuery(query, ExamQuestion.class).getResultList();
		System.out.println(wrongList);
		return wrongList;
	}

}
