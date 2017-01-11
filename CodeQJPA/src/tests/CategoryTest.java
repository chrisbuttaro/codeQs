package tests;

import static org.junit.Assert.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import entities.Category;
import entities.Question;

public class CategoryTest {

	private EntityManagerFactory emf;
    private EntityManager em;

    @Before
    public void setUp() throws Exception {
        emf = Persistence.createEntityManagerFactory("CodeQJPA");
        em = emf.createEntityManager();
    }

	@Test
	public void test() {
		Category c = em.find(Category.class, 2);
		assertEquals("Java Script", c.getName());
	}

	@After
	public void tearDown() throws Exception {
		em.close();
		emf.close();

	}

}
