package tests;

import static org.junit.Assert.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import entities.Answer;

public class AnswerTest {

	private EntityManagerFactory emf;
	private EntityManager em;

	@Before
	public void setUp() throws Exception {
		emf = Persistence.createEntityManagerFactory("CodeQJPA");
		em = emf.createEntityManager();
	}

	@Test
	public void test() {
		Answer a = em.find(Answer.class, 4);
		assertEquals(9, a.getQuestion().getId());
	}

	@After
	public void tearDown() throws Exception {
		em.close();
		emf.close();

	}

}
