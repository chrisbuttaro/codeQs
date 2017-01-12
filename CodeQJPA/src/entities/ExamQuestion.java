package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

//entity
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
	
	// question mapping
	@JsonBackReference(value="q_eq")
	@ManyToOne
	@JoinColumn(name="question_id")
	private Question question;
	
	@Column(name="is_right")
	private boolean isRight;

	public Exam getExam() {
		return exam;
	}

	public void setExam(Exam exam) {
		this.exam = exam;
	}

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}


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
