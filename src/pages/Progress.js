import React, { useState, useRef, useEffect } from 'react';
import "./style.css";
import users from "../image/User.png";
import homes from "../image/home.png";
import backs from "../image/back.png";
import task from "../image/Frame 20.png";

const Progress = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [showCongratulationsModal, setShowCongratulationsModal] = useState(false);
  const [currentTask, setCurrentTask] = useState('');
  const [completedTasks, setCompletedTasks] = useState(0);
  const taskModalRef = useRef(null); 
  const taskFormRef = useRef(null); 
  
  useEffect(() => {
    // Обработка клика на иконку пользователя
    const userIcon = document.getElementById('userIcon');
    if (userIcon) {
      userIcon.addEventListener('click', () => {
        setShowLoginModal(true);
      });
    }

    // Обработка клика на кнопку "Закрыть" в модальном окне
    const loginClose = document.getElementById('loginClose');
    if (loginClose) {
      loginClose.addEventListener('click', () => {
        setShowLoginModal(false);
      });
    }

    // Обработка клика вне модального окна 
    window.addEventListener('click', (event) => {
      if (event.target === taskModalRef.current) {
        setShowTaskModal(false);
      }
      if (event.target === document.getElementById('loginModal')) {
        setShowLoginModal(false);
      }
      if (event.target === document.getElementById('thankYouModal')) {
        setShowThankYouModal(false);
      }
      if (event.target === document.getElementById('congratulationsModal')) {
        setShowCongratulationsModal(false);
      }
    });

    // Обработка клика на кнопку "Войти" в модальном окне
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
      loginButton.addEventListener('click', () => {
        setShowLoginModal(false);
      });
    }

    // Обработка клика на кнопки "Посмотреть задание"
    const viewTaskButtons = document.querySelectorAll('.view-task-button');
    viewTaskButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        setShowTaskModal(true);
        setCurrentTask(event.target.id); 

        const taskButton = event.target;
        taskButton.innerText = 'Задание выполняется';
        taskButton.style.backgroundColor = 'orange';
        taskButton.style.color = '#ffffff'; 
        taskButton.disabled = true;
      });
    });

    // Обработка клика на кнопку "Закрыть" в модальном окне
    const closeButton = document.querySelector('.close');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        setShowTaskModal(false);
      });
    }

    // Обработка отправки формы задания
    if (taskFormRef.current) {
      taskFormRef.current.addEventListener('submit', (event) => {
        event.preventDefault();
        setShowTaskModal(false);
        setShowThankYouModal(true);

        const fileInput = document.getElementById('fileUpload');
        const file = fileInput.files[0];
        if (file) {
          console.log('Загруженный файл:', file.name);
        }
      });
    }

    // Обработка клика на кнопку "Продолжить" в модальном окне
    const continueButton = document.getElementById('continueButton');
    if (continueButton) {
      continueButton.addEventListener('click', () => {
        setShowThankYouModal(false);
        markTaskAsCompleted(currentTask);
      });
    }

    // Обработка клика на кнопку "Перейти к финальному тесту"
    const finalTestButton = document.getElementById('finalTestButton');
    if (finalTestButton) {
      finalTestButton.addEventListener('click', () => {
        // window.location.href = 'final-test.html';  // Для реальной страницы
        console.log('Переход к финальному тесту'); // Для проверки в консоли
      });
    }

    return () => {
      // Убираем слушатели при размонтировании компонента
      userIcon?.removeEventListener('click', () => {});
      loginClose?.removeEventListener('click', () => {});
      window.removeEventListener('click', (event) => {});
      loginButton?.removeEventListener('click', () => {});
      viewTaskButtons.forEach(button => {
        button.removeEventListener('click', () => {});
      });
      closeButton?.removeEventListener('click', () => {});
      taskFormRef.current?.removeEventListener('submit', () => {});
      continueButton?.removeEventListener('click', () => {});
      finalTestButton?.removeEventListener('click', () => {});
    };
  }, []);

  const markTaskAsCompleted = (taskId) => {
    const taskButton = document.getElementById(taskId);
    if (taskButton) {
      taskButton.innerText = 'Задание выполнено';
      taskButton.style.backgroundColor = 'green';
      taskButton.style.color = '#ffffff'; 
      taskButton.disabled = true;

      const taskItem = taskButton.closest('.timeline-item');
      if (taskItem) {
        taskItem.classList.add('completed');
        taskItem.querySelector('.marker')?.classList.add('checked');
      }

      setCompletedTasks(completedTasks + 1);

      if (completedTasks + 1 === 5) {
        setShowCongratulationsModal(true);
      }
    }
  };

  return (
    <div className="container">
      <header>
        <div className="header">
          <div className="back">
            <a href="index.html">
              <img src={backs} alt="Назад"/>
            </a>
          </div>
          <div className="user" id="userIcon">
            <img src={users} alt="Пользователь"/>
            <a href="index.html">
              <img src={homes} alt="Дом"/>
            </a>
          </div>
        </div>
      </header>
      <main>
        <div className="progress">
          <h2>Название вакансии</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div className="timeline">
            <div className="timeline-item completed">
              <div className="marker checked"></div>
              <div className="content">
                <h3>ЗАДАНИЕ 1</h3>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <button id="task1" className="view-task-button">Посмотреть задание</button>
            </div>
            <div className="timeline-item">
              <div className="marker"></div>
              <div className="content">
                <h3>ЗАДАНИЕ 2</h3>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <button id="task2" className="view-task-button">Посмотреть задание</button>
            </div>
            <div className="timeline-item">
              <div className="marker"></div>
              <div className="content">
                <h3>ЗАДАНИЕ 3</h3>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <button id="task3" className="view-task-button">Посмотреть задание</button>
            </div>
            <div className="timeline-item">
              <div className="marker"></div>
              <div className="content">
                <h3>ЗАДАНИЕ 4</h3>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <button id="task4" className="view-task-button">Посмотреть задание</button>
            </div>
            <div className="timeline-item">
              <div className="marker"></div>
              <div className="content">
                <h3>ЗАДАНИЕ 5</h3>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <button id="task5" className="view-task-button">Посмотреть задание</button>
            </div>
          </div>
        </div>
      </main>
      {/* ... Footer ... */} 
      {/* Модальное окно входа */}
      <div id="loginModal" className={`mobile ${showLoginModal ? 'show' : ''}`}>
        <div className="mobile-content">
          <span className="close" id="loginClose">&times;</span>
          <div className="mobile-header">
            <h2>Вход</h2>
          </div>
          {/* ... форма входа ... */}
          <button id="loginButton" className="submit-button">Войти</button>
        </div>
      </div>

      {/* Модальное окно задания */}
      <div id="taskModal" ref={taskModalRef} className={`mobile ${showTaskModal ? 'show' : ''}`}>
        <div className="mobile-content">
          <span className="close">&times;</span>
          <div className="mobile-header">
            <img src={task} alt="Задание"/>
            <h2>Задание</h2>
          </div>
          <h3>Название задания</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <form id="taskForm" ref={taskFormRef}>
            <label htmlFor="fileUpload">Загрузить файл:</label>
            <input type="file" id="fileUpload" />
            <input type="submit" className="submit-button" value="Отправить" />
          </form>
        </div>
      </div>

      {/* Модальное окно "Спасибо" */}
      <div id="thankYouModal" className={`mobile ${showThankYouModal ? 'show' : ''}`}>
        <div className="mobile-content">
          <h2>Спасибо!</h2>
          <p>Ваше задание было успешно отправлено.</p>
          <button id="continueButton" className="submit-button">Продолжить</button>
        </div>
      </div>

      {/* Модальное окно "Поздравляем" */}
      <div id="congratulationsModal" className={`mobile ${showCongratulationsModal ? 'show' : ''}`}>
        <div className="mobile-content">
          <h2>Поздравляем!</h2>
          <p>Вы успешно завершили все задания. Теперь вы можете пройти финальный тест.</p>
          <button id="finalTestButton" className="submit-button">Перейти к финальному тесту</button>
        </div>
      </div>
    </div>
  );
};

export default Progress;