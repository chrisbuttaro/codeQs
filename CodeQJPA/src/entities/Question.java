package entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "question")
public class Question {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String question;
	@ManyToOne
	@JoinColumn(name = "category_id")
	private Category category;
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	public List<ExamQuestion> getExamQuestion() {
		return examQuestion;
	}

	public void setExamQuestion(List<ExamQuestion> examQuestion) {
		this.examQuestion = examQuestion;
	}

	@OneToMany(mappedBy = "question")
	private List<Answer> answers;
	@ManyToMany(mappedBy = "questions")
	private List<Exam> exams;
	@OneToMany(mappedBy="exam")
	private List <ExamQuestion> examQuestion;
	
	
	
	
	public List<Exam> getExams() {
		return exams;
	}

	public void setExams(List<Exam> exams) {
		this.exams = exams;
	}


	public void addExam(Exam exam) {
		if (exams == null) {
			exams = new ArrayList<>();
		}
		if (!exams.contains(exam)) {
			exams.add(exam);
			exam.addQuestion(this);
		}
	}

	public void removeExam(Exam exam) {
		if (exams != null && exams.contains(exam)) {
			exams.remove(exam);
			exam.removeQuestion(this);
		}
	}

	public List<Answer> getAnswers() {
		return answers;
	}

	public void setAnswers(List<Answer> answers) {
		this.answers = answers;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getId() {
		return id;
	}
}