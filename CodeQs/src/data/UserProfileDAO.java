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
	
	public List<Exam> getAllUserExams(int uid){

		String query = "SELECT e FROM Exam e WHERE e.user.id = " +uid; 
		List<Exam> exams = em.createQuery(query, Exam.class).getResultList();
		
		return exams;
	}
}