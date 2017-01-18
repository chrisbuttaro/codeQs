package entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "test")
public class Exam {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@JsonIgnore
	private Integer score; 
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	//@JsonManagedReference("exam-user")
	private User user;
	
	@JsonIgnore
	@ManyToMany
	@JoinTable(name = "test_question", joinColumns = @JoinColumn(name = "test_id"), inverseJoinColumns = @JoinColumn(name = "question_id"))
	private List<Question> questions;
	
	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, mappedBy="exam")
	private List <ExamQuestion> examQuestion;
	
	@ManyToOne
	@JoinColumn(name = "category_id")
	private Category category;

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Exam() {
	}
	
	public List<ExamQuestion> getExamQuestion() {
		return examQuestion;
	}

	public void setExamQuestion(List<ExamQuestion> examQuestion) {
		this.examQuestion = examQuestion;
	}

	public void addQuestion(Question question) {
		if (questions == null) {
			questions = new ArrayList<>();
		}
		if (!questions.contains(question)) {
			questions.add(question);
			question.addExam(this);
		}
	}

	public void removeQuestion(Question question) {
		if (questions != null && questions.contains(question)) {
			questions.remove(question);
			question.removeExam(this);
		}
	}

	public List<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}

	public User getUser() {
		return user;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getId() {
		return id;
	};
	
	

}
