
from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

"""
    ^.*
    ^ asserts position at start of a line
    . matches any character (except for line terminators)
    * matches the previous token between zero and unlimited times, as many times as possible, giving back as needed (greedy)
"""
urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]