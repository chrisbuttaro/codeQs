package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import entities.Answer;
import entities.Category;
import entities.Question;
import entities.User;

@Transactional
@Repository
public class QuestionDAO {
	@PersistenceContext
	private EntityManager em;

	public List<Question> index() {
		String query = "select q from Question q";
		return em.createQuery(query, Question.class).getResultList();
	}

	public Question show(int id) {
		Question questionUser = em.find(Question.class, id);
		System.out.println("**************************" + questionUser.getUser());
		return questionUser;
	}

	public Question create(Question newQuestion, int cid, int uid) {
		Category category = em.find(Category.class, cid);
		User user = em.find(User.class, uid);
		newQuestion.setCategory(category);
		newQuestion.setUser(user);
		for (Answer a : newQuestion.getAnswers()) {
			a.setQuestion(newQuestion);
		}
		System.out.println(newQuestion.getAnswers().size());
		System.out.println(newQuestion.getAnswers().get(0).getQuestion());
		em.persist(newQuestion);
		em.flush();

		return newQuestion;
	}

	public Question update(int id, Question q) {
		Question Question = em.find(Question.class, id);
		em.persist(Question);
		em.flush();
		return Question;
	}

	public Question destroy(int id) {
		Question Question = em.find(Question.class, id);
		em.remove(Question);
		return Question;
	}

	public List<Question> getQuestionsByCategory(int cid) {
		String query = "SELECT q FROM Question q WHERE category_id =" + cid + " ORDER BY RAND()";
		return em.createQuery(query, Question.class).setMaxResults(10).getResultList();
	}

	public Answer createAnswer(Answer newAnswer, Question question, String answer, Boolean isCorrect) {
		newAnswer.setQuestion(question);
		newAnswer.setAnswer(answer);
		newAnswer.setCorrect(isCorrect);

		em.persist(newAnswer);
		em.flush();

		return newAnswer;
	}
}
