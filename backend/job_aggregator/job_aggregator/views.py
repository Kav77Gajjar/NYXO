"""
Views for serving the React frontend
"""
import os
from django.http import HttpResponse, Http404
from django.conf import settings
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import csrf_exempt
import mimetypes


@never_cache
@csrf_exempt
def serve_react_app(request, path=''):
    """
    Serve React application files and handle SPA routing
    """
    try:
        # Define the static files directory where React build files are located
        # BASE_DIR points to /app/backend/job_aggregator, so we need to go up one level
        static_dir = os.path.join(settings.BASE_DIR.parent, 'staticfiles')
        
        # If no path specified, serve index.html
        if not path:
            path = 'index.html'
        
        # Construct full file path
        file_path = os.path.join(static_dir, path)
        
        # Security check: ensure file is within static directory
        if not os.path.abspath(file_path).startswith(os.path.abspath(static_dir)):
            raise Http404("File not found")
        
        # If file exists, serve it
        if os.path.exists(file_path) and os.path.isfile(file_path):
            # Determine content type
            content_type, _ = mimetypes.guess_type(file_path)
            if content_type is None:
                content_type = 'application/octet-stream'
            
            # Read and serve file
            with open(file_path, 'rb') as f:
                response = HttpResponse(f.read(), content_type=content_type)
                return response
        
        # If file doesn't exist and it's not an API call, serve index.html (SPA routing)
        elif not path.startswith('api/'):
            index_path = os.path.join(static_dir, 'index.html')
            if os.path.exists(index_path):
                with open(index_path, 'rb') as f:
                    response = HttpResponse(f.read(), content_type='text/html')
                    return response
            else:
                # Fallback: create a basic HTML page if index.html doesn't exist
                html_content = f"""
                <!DOCTYPE html>
                <html>
                <head>
                    <title>NYXO - Job Aggregator</title>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                </head>
                <body>
                    <div id="root">
                        <h1>NYXO Job Aggregator</h1>
                        <p>Welcome to NYXO! The React frontend files are being built.</p>
                        <p>Looking for files in: {static_dir}</p>
                        <p>Files found: {os.listdir(static_dir) if os.path.exists(static_dir) else 'Directory not found'}</p>
                        <p>API is available at: <a href="/api/v1/">/api/v1/</a></p>
                        <p>Admin panel: <a href="/admin/">/admin/</a></p>
                        <p>API Documentation: <a href="/api/docs/">/api/docs/</a></p>
                    </div>
                </body>
                </html>
                """
                return HttpResponse(html_content, content_type='text/html')
        
        # File not found
        raise Http404("File not found")
        
    except Exception as e:
        # Log error and return 500
        import logging
        logger = logging.getLogger(__name__)
        logger.error(f"Error serving React app: {str(e)}")
        
        # Return a basic error page
        error_html = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <title>NYXO - Error</title>
        </head>
        <body>
            <h1>NYXO Job Aggregator</h1>
            <p>There was an error loading the application.</p>
            <p>API is still available at: <a href="/api/v1/">/api/v1/</a></p>
            <p>Error: {str(e)}</p>
        </body>
        </html>
        """
        return HttpResponse(error_html, content_type='text/html', status=500)