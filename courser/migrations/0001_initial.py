# Generated by Django 3.0.6 on 2020-06-09 10:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user', '0001_initial'),
        ('contenttypes', '0002_remove_content_type_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, unique=True)),
                ('image', models.ImageField(upload_to='course/courses', verbose_name='image')),
                ('rate', models.IntegerField(default=0, verbose_name='rate')),
                ('rate_student', models.IntegerField(default=0, verbose_name='rate_student')),
                ('value_old', models.CharField(max_length=500)),
                ('value_new', models.CharField(max_length=500)),
                ('description', models.CharField(max_length=500)),
                ('students', models.IntegerField(default=0, verbose_name='students')),
                ('video_ins', models.CharField(max_length=500)),
                ('you_need_know', models.CharField(default='', max_length=3000, verbose_name='you_need_know')),
                ('overview', models.TextField()),
                ('learn_times', models.CharField(max_length=500)),
                ('module_nums', models.IntegerField(default=0, verbose_name='module_nums')),
                ('click_nums', models.IntegerField(default=0, verbose_name='click_nums')),
                ('fav_nums', models.IntegerField(default=0, verbose_name='fav_nums')),
                ('teacher_tell', models.CharField(default='', max_length=300, verbose_name='teacher_tell')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('own_teacher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='courses', to='user.Teacher')),
            ],
            options={
                'verbose_name': 'course',
                'verbose_name_plural': 'course',
            },
        ),
        migrations.CreateModel(
            name='File',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('file', models.FileField(upload_to='course/files')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('file', models.FileField(upload_to='course/images')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, unique=True)),
                ('icon', models.ImageField(default='image/default.png', upload_to='course/subject', verbose_name='image_teacher')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Text',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('content', models.TextField()),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('url', models.URLField()),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tag', models.CharField(max_length=200)),
                ('tag_count', models.IntegerField(default=0, verbose_name='tag_count')),
                ('subject', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tag', to='courser.Subject')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Student_Course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rate', models.IntegerField(default=0, verbose_name='rate')),
                ('study_progress', models.CharField(max_length=500)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='student_course', to='courser.Course')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='student_course', to='user.Student')),
            ],
        ),
        migrations.CreateModel(
            name='Module',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('module_level', models.IntegerField(default=0)),
                ('title', models.CharField(max_length=200, unique=True)),
                ('description', models.TextField(blank=True)),
                ('done', models.IntegerField(default=0)),
                ('url', models.CharField(max_length=500)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='modules', to='courser.Course')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='course',
            name='tag',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='courses', to='courser.Tag'),
        ),
        migrations.CreateModel(
            name='Content',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('object_id', models.PositiveIntegerField()),
                ('content_type', models.ForeignKey(limit_choices_to={'model__in': ('text', 'video', 'image', 'file')}, on_delete=django.db.models.deletion.CASCADE, to='contenttypes.ContentType')),
                ('module', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='contents', to='courser.Module')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
