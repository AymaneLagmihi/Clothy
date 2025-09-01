import { supabase } from '@/lib/supabase/cliente'

const loginBtn = document.getElementById('login')
const logoutBtn = document.getElementById('logout')
const userEl = document.getElementById('user')

// Google Login
loginBtn.addEventListener('click', async () => {
  const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' })
  if (error) console.error(error)
})

// Logout
logoutBtn.addEventListener('click', async () => {
  await supabase.auth.signOut()
  updateUI(null)
})

// Check user on load
async function checkUser() {
  const { data } = await supabase.auth.getUser()
  updateUI(data.user)
}

// Listen for auth changes
supabase.auth.onAuthStateChange((event, session) => {
  updateUI(session?.user || null)
})

function updateUI(user) {
  if (user) {
    userEl.textContent = `👋 Hello, ${user.email}`
    loginBtn.style.display = 'none'
    logoutBtn.style.display = 'inline-block'
  } else {
    userEl.textContent = ''
    loginBtn.style.display = 'inline-block'
    logoutBtn.style.display = 'none'
  }
}

checkUser()
