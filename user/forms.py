from django import forms

class LoginForm(forms.Form):
	user_name = forms.CharField(required=True)
	pass_word = forms.CharField(required=True)


class RegisterForm(forms.Form):
	user_name = forms.CharField(required=True)
	password1 = forms.CharField(required=True)
	password2 = forms.CharField(required=True)
	email = forms.CharField(required=True)
	type_user = forms.CharField(required=True)
