package data;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import entities.Category;
import entities.Exam;
import entities.User;

@Transactional
@Repository
public class ExamDAO {

	@PersistenceContext // includes jpa's entity manager
	private EntityManager em;
	ArrayList<Exam> Exams = new ArrayList<>();

	public List index() {
		String query = "Select e from Exam e";
		return em.createQuery(query, Exam.class).getResultList();
	}

	public Exam show(int id) {
		return em.find(Exam.class, id);
	}

	public Exam update(int id, Exam ExamJson) {
		Exam existingExam = em.find(Exam.class, id);
		em.persist(existingExam);
		em.flush();
		return existingExam;
	}

	public Exam create(Exam ExamJson, int id, int cid) {
		User u = em.find(User.class, id);
		Category category = em.find(Category.class, cid);
		ExamJson.setUser(u);
		ExamJson.setCategory(category);
		em.persist(ExamJson);
		em.flush();
		return ExamJson;
	}

	public Exam destroy(int id) {
		Exam e = em.find(Exam.class, id);
		em.createQuery("Delete from Exam e where e.id=" + id).executeUpdate();

		return e;

	}
	
	public Collection<Exam> getExamsForUser(int userId) {
		Collection<Exam> exams = em.createQuery("SELECT e FROM Exam e WHERE user.id = :uid")
				.setParameter("uid", userId)
				.getResultList();
		return exams;
	}

}
