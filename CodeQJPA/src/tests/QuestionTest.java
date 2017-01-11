package tests;

import static org.junit.Assert.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import entities.Category;
import entities.Question;

public class QuestionTest {

	private EntityManagerFactory emf;
    private EntityManager em;

    @Before
    public void setUp() throws Exception {
        emf = Persistence.createEntityManagerFactory("CodeQJPA");
        em = emf.createEntityManager();
    }

	@Test
	public void test() {
		Question q = em.find(Question.class, 2);
		assertEquals("What is a singleton?", q.getQuestion());
		assertEquals("java", q.getCategory().getName());
		assertEquals("user1", q.getUser().getUsername());
	}

	@After
	public void tearDown() throws Exception {
		em.close();
		emf.close();

	}

}
