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
		String query2 = "SELECT q FROM Question q JOIN q.examQuestion eq where eq.exam.user.id =" + uid + " AND q.category.id = " + cid;
		List<Question> wrongList = em.createQuery(query2, Question.class).getResultList();
		Set<Question> wrongListSet = new HashSet<Question>();
		for (Question question : wrongList) {
			if (wrongListSet.contains(question) && question.getExamQuestion().get(question.getExamQuestion().size() - 1).isRight() == true ) {
				wrongListSet.remove(question);
			} else if (question.getExamQuestion().get(question.getExamQuestion().size() - 1).isRight() == false) {
				wrongListSet.add(question);
			}
		}

		return wrongListSet;
		
	}

}
