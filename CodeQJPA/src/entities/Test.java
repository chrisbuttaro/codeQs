package entities;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Test {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
}
