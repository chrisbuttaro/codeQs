package data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import entities.Question;

@Repository
@Transactional
public class WrongListDAO {
	@PersistenceContext
	private EntityManager em;
	
	public Set<Question> getWrongListByUser(int uid, int cid) {
		String query = "SELECT eq FROM ExamQuestion eq where eq.exam.user.id =" + uid + " AND eq.question.category.id = " + cid + " AND eq.isRight = false";
		String query2 = "SELECT q FROM Question q JOIN q.examQuestion eq where eq.exam.user.id =" + uid + " AND q.category.id = " + cid + " AND eq.isRight = false";
		List<Question> wrongList = em.createQuery(query2, Question.class).getResultList();
		Set<Question> wrongListSet = new HashSet<>(wrongList); 
		return wrongListSet;
		
	}

}
