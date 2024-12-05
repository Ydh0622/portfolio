from django.db import models

# Create your models here.
class Student(models.Model):
    title = models.CharField("포스트 제목", max_length = 100)
    content = models.TextField("포스트내용")
    thumbnail = models.ImageField("썸네일 이미지", upload_to="post", blank=True)

    def __str__(self):
        return self.title