package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "test_question")
public class ExamQuestion {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	// exam mapping
	@ManyToOne
	@JoinColumn(name="test_id")
	private Exam exam;
	
	@ManyToOne
	@JoinColumn(name="question_id")
	private Question question;
	
	
	
	
	@Column(name="is_right")
	private boolean isRight;

	public ExamQuestion() {
	}

	public boolean isRight() {
		return isRight;
	}

	public void setRight(boolean isRight) {
		this.isRight = isRight;
	}

	public int getId() {
		return id;
	};

}
