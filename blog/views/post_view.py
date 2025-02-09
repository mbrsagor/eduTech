from django.views import generic
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from django.contrib.messages.views import SuccessMessageMixin


from blog import forms
from blog.models import Post



@method_decorator(login_required(login_url='/user/signin/'), name='dispatch')
class CreatePostView(SuccessMessageMixin, generic.CreateView):
    """
    Post creating using CMS
    """
    model = Post
    form_class = forms.PostForm
    success_url = '/blog/create-post'
    success_message = 'Post created successfully.'
    template_name = 'post/create_post.html'

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)



@method_decorator(login_required(login_url='/user/signin/'), name='dispatch')
class PostListView(generic.ListView):
    """
    Post listing using CMS
    """
    model = Post
    paginate_by = 8
    context_object_name = 'posts'
    ordering = ['-created_at']
    template_name = 'post/post_list.html'
    # queryset = Post.objects.filter(is_publish=True)


@method_decorator(login_required(login_url='/user/signin/'), name='dispatch')
class UpdatePostView(SuccessMessageMixin, generic.UpdateView):
    """
    Post updating using CMS
    """
    model = Post
    form_class = forms.PostForm
    success_url = '/blog/posts'
    success_message = 'Post created successfully.'
    template_name = 'post/create_post.html'

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)


@method_decorator(login_required(login_url='/user/signin/'), name='dispatch')
class DeletePostView(SuccessMessageMixin, generic.DeleteView):
    """
    Post deleting using CMS
    """
    model = Post
    success_url = '/blog/posts/'
    success_message = 'The post has been deleted.'
    template_name = 'common/delete_confirm.html'

