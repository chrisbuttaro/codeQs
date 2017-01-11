package tests;

import static org.junit.Assert.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import entities.Exam;

public class ExamTest {

	private EntityManagerFactory emf;
    private EntityManager em;

    @Before
    public void setUp() throws Exception {
        emf = Persistence.createEntityManagerFactory("CodeQJPA");
        em = emf.createEntityManager();
    }

	@Test
	public void test() {
		Exam e = em.find(Exam.class, 1);
		assertEquals(1, e.getUser().getId());
		assertEquals(1, e.getQuestions().get(0).getId());
	}

	@After
	public void tearDown() throws Exception {
		em.close();
		emf.close();

	}
}
