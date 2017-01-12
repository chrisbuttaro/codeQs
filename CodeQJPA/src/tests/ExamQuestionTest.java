package tests;

import static org.junit.Assert.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import entities.ExamQuestion;

public class ExamQuestionTest {

	private EntityManagerFactory emf;
    private EntityManager em;

    @Before
    public void setUp() throws Exception {
        emf = Persistence.createEntityManagerFactory("CodeQJPA");
        em = emf.createEntityManager();
    }

	@Test
	public void test() {
		ExamQuestion eq = em.find(ExamQuestion.class, 1);
		assertEquals(false, eq.isRight());
		assertEquals(2, eq.getExam().getQuestions().get(1).getId());
		assertEquals(1, eq.getQuestion().getId());
	}

	@After
	public void tearDown() throws Exception {
		em.close();
		emf.close();

	}

}
