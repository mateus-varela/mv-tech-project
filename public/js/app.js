// =====================
// STORAGE HELPERS
// =====================
function getUsers() { return JSON.parse(localStorage.getItem('users') || '[]'); }
function saveUsers(u) { localStorage.setItem('users', JSON.stringify(u)); }
function getCurrentUser() { return JSON.parse(localStorage.getItem('currentUser') || 'null'); }
function saveCurrentUser(u) { localStorage.setItem('currentUser', JSON.stringify(u)); }
function getProjects() { return JSON.parse(localStorage.getItem('projects') || '[]'); }
function saveProjects(p) { localStorage.setItem('projects', JSON.stringify(p)); }
function getTasks() { return JSON.parse(localStorage.getItem('tasks') || '[]'); }
function saveTasks(t) { localStorage.setItem('tasks', JSON.stringify(t)); }

function requireAuth() {
  if (!getCurrentUser()) window.location.href = 'index.html';
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}

// =====================
// AUTH
// =====================
function register(name, email, password) {
  const users = getUsers();
  if (users.find(u => u.email === email)) return { ok: false, msg: 'E-mail já cadastrado.' };
  const user = { id: Date.now().toString(), name, email, password };
  users.push(user);
  saveUsers(users);
  return { ok: true };
}

function login(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return { ok: false, msg: 'E-mail ou senha incorretos.' };
  saveCurrentUser({ id: user.id, name: user.name, email: user.email });
  return { ok: true };
}

// =====================
// PROJECTS
// =====================
function createProject(name, deadline, members) {
  const user = getCurrentUser();
  const projects = getProjects();
  const project = {
    id: Date.now().toString(),
    name,
    deadline,
    members,
    userId: user.id,
    createdAt: new Date().toISOString()
  };
  projects.push(project);
  saveProjects(projects);
  return project;
}

function updateProject(id, updates) {
  const projects = getProjects();
  const project = projects.find(p => p.id === id);
  if (project) Object.assign(project, updates);
  saveProjects(projects);
}

function deleteProject(id) {
  saveProjects(getProjects().filter(p => p.id !== id));
  saveTasks(getTasks().filter(t => t.projectId !== id));
}

// =====================
// TASKS
// =====================
function createTask(projectId, title, description, assignee, deadline, status = 'todo') {
  const tasks = getTasks();
  const task = {
    id: Date.now().toString(),
    projectId,
    title,
    description,
    assignee,
    deadline,
    status,
    createdAt: new Date().toISOString()
  };
  tasks.push(task);
  saveTasks(tasks);
  return task;
}

function updateTaskStatus(taskId, status) {
  const tasks = getTasks();
  const task = tasks.find(t => t.id === taskId);
  if (task) task.status = status;
  saveTasks(tasks);
}

function updateTask(taskId, updates) {
  const tasks = getTasks();
  const task = tasks.find(t => t.id === taskId);
  if (task) Object.assign(task, updates);
  saveTasks(tasks);
}

function deleteTask(taskId) {
  saveTasks(getTasks().filter(t => t.id !== taskId));
}
