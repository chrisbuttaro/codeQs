package data;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

import entities.User;



@Transactional
public class UserDAO {
	  @Autowired
	  BCryptPasswordEncoder passwordEncoder;
	  
	@PersistenceContext//includes jpa's entity manager
    private EntityManager em;
	ArrayList<User> tl=new ArrayList<>();

	public List index(){
		String query = "Select u from User u";
		  return em.createQuery(query, User.class).getResultList();
		}

	
	public User show(int id) {
		return em.find(User.class,id); 
	}


	public User update(int id, User userJson) {
			User existinguser=em.find(User.class, id);
//				existinguser.setDescription(userJson.getDescription());
//				existinguser.setTask(userJson.getTask());
//				existinguser.setCompleted(userJson.isCompleted());
			em.persist(existinguser);
			em.flush(); 
			return existinguser; 
		}


	public User create(User user) {
	    String rawPassword = user.getPassword();
	    String encodedPassword = passwordEncoder.encode(rawPassword);
	    user.setPassword(encodedPassword);
	    em.persist(user);
	    em.flush();
	    return user;
	  }

	
	
	public User authenticateuser(User user) throws NoResultException {
	    // Find the managed user by its username
	    User u = em.createQuery("SELECT u FROM User u where username = :username", User.class)
	        .setParameter("username", user.getUsername())
	        .getSingleResult();
	     //One-way encrypt the provided password, see if the result matches the persisted password value
	    if (passwordEncoder.matches(user.getPassword(), u.getPassword())) {
	      return u;
	    }

	    return null;
	  }


	public User destroy(int id) {
		User t=em.find(User.class, id);
		em.createQuery("Delete from user t where t.id="+id).executeUpdate();

		return t; 
		
		
		
		
		
	}

}
