package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import entities.Exam;
import entities.User;

@Repository
@Transactional
public class UserProfileDAO {
	@PersistenceContext
	private EntityManager em;
	
	public User getUser(int uid){
		String query = "SELECT u FROM User u where u.id = " + uid;
		User user = em.createQuery(query, User.class).getSingleResult();
		return user;
	}
	
//	public List<Exam> getUserProfileOfExamsTaken(int uid) {
//		String query = "SELECT e FROM Exam e where e.userId = " + uid ;
//		return em.createQuery(query, Exam.class).getResultList();
//	}
	
	public List<Exam> getUserExamByCategory(int uid, int cid){
//		String query = "SELECT e FROM Exam e JOIN e.examQuestion eq WHERE eq.question.category.id = " + cid + " AND e.user.id = " +uid; 
		String query = "SELECT u.id, c.id FROM User u JOIN Exam e on u.exam=e.userId JOIN testQuestion tq on e.testQuestion=tq.testId JOIN question q on tq.quesiton=q.id JOINcategory c on q.category=c.id WHERE u.id = " + uid + " AND c.id = " +cid; 
		List<Exam> exams = em.createQuery(query, Exam.class).getResultList();
		
		return exams;
	}
}