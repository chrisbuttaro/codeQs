package entities;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class TestQuestion {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int test_id;
	private int question_id;
	private boolean right; 
	
	public TestQuestion(){}

	public TestQuestion(int test_id, int question_id, boolean right) {
		this.test_id = test_id;
		this.question_id = question_id;
		this.right = right;
	}

	public int getTest_id() {
		return test_id;
	}

	public void setTest_id(int test_id) {
		this.test_id = test_id;
	}

	public int getQuestion_id() {
		return question_id;
	}

	public void setQuestion_id(int question_id) {
		this.question_id = question_id;
	}

	public boolean isRight() {
		return right;
	}

	public void setRight(boolean right) {
		this.right = right;
	}

	public int getId() {
		return id;
	};
	
	
	
}
